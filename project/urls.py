"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView
from website import views

urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^api/$', TemplateView.as_view(template_name='api.html'),
        name='api'),
    url(r'^chat/$', TemplateView.as_view(template_name='chat.html'),
        name='chat'),
    url(r'^blog/$', TemplateView.as_view(template_name='blog.html'),
        name='blog'),
    url(r'^donate/$', TemplateView.as_view(template_name='donate.html'),
        name='donate'),
    url(r'^admin/', admin.site.urls),
    url(r'^robots.txt$', TemplateView.as_view(template_name='robots.txt',
        content_type='text/plain'), name='robots_file'),
]
