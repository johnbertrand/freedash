require 'rubygems'
require 'sinatra'
require 'rufus/scheduler'
require 'json'





get '/' do
  erb :index, :layout => :main
   
end
  

get '/freedash' do
  erb :dashboard_main
   
end