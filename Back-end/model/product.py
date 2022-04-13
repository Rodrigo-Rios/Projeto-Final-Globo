from json import loads, dumps

class ProductsModel:

    def __init__(self, name, image_product, description,price,extras):

       
       self.name = name
       self.image_product = image_product
       self.description = description
       self.price = price
       self.extras = extras
       

    
    @classmethod
    def list_to_dict():
        return loads(dumps(default=ProductsModel.to_dict))

    def to_dict(self):
        
        return {
            "name": self.name,
            "imageProduct": self.image_product,
            "description": self.description,
            "price": self.price,
            "extras": self.extras,
            }