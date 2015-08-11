require 'open-uri'
require 'nokogiri'
require 'json'


class NagiosServiceGroups

  def initialize
    @groupsArray = Array.new
  end
  
  @@instance = NagiosServiceGroups.new
  
  def self.instance
    return @@instance
  end
  
  
  def getServiceGroups
        url_getservicegroups= "http://tewuvapnag51.sephoraus.com/nagiosxi/backend/?cmd=getservicegroups&username=jbertrand&ticket=4qpmnm5868dn48nc8hq8n870oeot79h938unt3v08ambfdknudsjk4hch98mfmsg"
        service_groups   = Hash.new
        

        content = Nokogiri::XML(open(url_getservicegroups))

        groups = content.xpath("/servicegrouplist/servicegroup")
        groups.each do |node|
          group_name = node.xpath("servicegroup_name/text()")
          @groupsArray.push({:name=>"#{group_name}", :id => node.attr('id') })
        end
    
        @groupsArray
  end
  
  private_class_method :new
  
  
end



