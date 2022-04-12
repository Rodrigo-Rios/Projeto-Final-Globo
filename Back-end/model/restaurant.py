from json import loads, dumps

class RestaurantsModel:

    def __init__(self, name, address, description, image_restaurant, responsible_name):

       
       self.name = name
       self.address = address
       self.description = description
       self.image_restaurant = image_restaurant
       self.responsible_name = responsible_name


    
    @classmethod
    def list_to_dict(cls):
        return loads(dumps(default=RestaurantsModel.to_dict))

    def to_dict(self):
        
        return {
            "Restaurant Name": self.name,
            "Restaurant Address": self.address,
            "description": self.description,
            "image_restaurant": self.image_restaurant,
            "responsible_name": self.responsible_name
            }