from django.conf.urls import patterns, include, url
from django.contrib import admin
from views import hello,hours_ahead,temp,temp2,temp3

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mysite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'mysite.views.home',name='home'),
    url(r'^hello$',hello),
    url(r'^time/plus/(\d{1,2})/$',hours_ahead),
    url(r'^temp/$',temp),
    url(r'^temp2/$',temp2),
    url(r'^temp3/$',temp3),

    url(r'^admin/', include(admin.site.urls)),
)
