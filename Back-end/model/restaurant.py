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
            "restaurantName": self.name,
            "restaurantAddress": self.address,
            "description": self.description,
            "imageRestaurant": self.image_restaurant,
            "responsibleName": self.responsible_name
            }