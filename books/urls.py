from django.conf.urls import patterns, include, url

from books import views
urlpatterns = patterns('',
    url(r'^logout/$',views.logout),
    url(r'^reg/$',views.reg),
    url(r'^edit/$',views.edit),
    url(r'^$',views.login),
)
