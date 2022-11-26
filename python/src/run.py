import json
import math
from collections import OrderedDict
from DCEL import *
from hull3D import *
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import cv2
import os

#profs.json 불러오기
with open('../output/jsons/profs.json','r',encoding='UTF-8') as f:
    json_data=json.load(f)

#유저 데이터 할당
a=50
b=40
c=40
user_data=[a,b,c]

#거리 계산 함수
def distance(p1,p2):
    d=0.0
    p2_x=p2['x']
    p2_y=p2['y']
    p2_z=p2['z']
    d=math.sqrt((p2_x-p1[0])**2 + (p2_y-p1[1])**2 + (p2_z-p1[2])**2)
    return d

#교수자와 나의 거리 계산
min_d=10000
max_d=0
user_info={'x':user_data[0],'y':user_data[1],'z':user_data[2]}
for profs in json_data.keys():
    tmp_d=distance(user_data,json_data[profs])
    user_info[profs]=tmp_d
    if tmp_d < min_d:
        min_d=tmp_d
        user_info['min_d']=tmp_d
        user_info['min_prof']=profs
    if tmp_d > max_d:
        max_d=tmp_d
        user_info['max_d']=tmp_d
        user_info['max_prof']=profs

#user.json 생성
file_data=OrderedDict()   
file_data["user"]=user_info 
with open('python/output/jsons/user.json','w',encoding='utf-8') as make_file:
    json.dump(file_data,make_file,ensure_ascii=False,indent='\t')

#pts.json 불러오기
with open('python/output/jsons/pts.json','r',encoding='UTF-8') as f:
    profs_pts=json.load(f)

#convexhull 생성
pts = np.array(profs_pts)
Hull = ConvexHull3D(pts, run=True, preproc=False, make_frames=True, frames_dir='python/output/frames/')
vertices = Hull.DCEL.vertexDict.values()
pts = Hull.getPts()
hull_vertices = pts[Hull.getVertexIndices()]
faces = [[list(v.p()) for v in face.loopOuterVertices()] for face in Hull.DCEL.faceDict.values()]
Hull.generateImage(newPt=user_data,show=True,profs_w=json_data)


#convexhull 생성과정 mp4 생성
image_folder='python/output/frames'
video_name='python/output/videos/output.mp4'

images=[img for img in os.listdir(image_folder) if img.endswith(".png")]
frame=cv2.imread(os.path.join(image_folder,images[0]))
height, width, layers = frame.shape

video=cv2.VideoWriter(video_name, 0, 1, (width,height))
for image in images:
    video.write(cv2.imread(os.path.join(image_folder, image)))  
cv2.destroyAllWindows()
video.release()