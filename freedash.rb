require 'rubygems'
require 'sinatra'
require 'rufus/scheduler'
require 'sinatra/json'
require 'json'
require './nagios_xi/servicegroups.rb'




get '/' do
  erb :index, :layout => :dashboard_main
end
  

get '/freedash' do
  erb :dashboard_main
end


get '/settings' do
    erb :settings, :layout => :main_layout, :locals => {:page_header => 'Settings'}
end


get '/servicegroups.json' do
  content_type :json
  
  groups = NagiosServiceGroups.instance.getServiceGroups()
 
  groups.to_json
end

get '/addservicegroup' do
  @@groups.push(params[:id])
  puts @@groups
end