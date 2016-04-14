#-*- encoding:utf-8 -*-


#用户数据整理
class Udata:
    def __init__(self,data):
        self.uname=data['uname']
        self.name=data.get('name','no')
        self.passwd=data.get('passwd','no')
        self.passwd2=data.get('passwd2','no')
        self.email=data.get('email','no')
        self.sex=data.get('sex',0)
