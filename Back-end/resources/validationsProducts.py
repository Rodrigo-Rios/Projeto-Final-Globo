import gladiator as gl 
from flask import abort
from collections import OrderedDict

def validate_name(field_validations, name_base):
    if not( gl.validate(field_validations[0], name_base)):
        abort(400, description="Name field only accepts string")

def validate_image(field_validations, name_base):
    if not( gl.validate(field_validations[1], name_base)):
        abort(400, description="Image field only accepts string")

def validate_description(field_validations, name_base):
    if not( gl.validate(field_validations[2], name_base)):
        abort(400, description="Description field only accepts string")

def validate_price(field_validations, name_base):
    if not( gl.validate(field_validations[3], name_base)):
        abort(400, description="Price field only accepts float")

def validate_extra(field_validations, name_base, new_product):
    if not( gl.validate(field_validations[4], name_base)):
        abort(400, description="Extra field only accepts list")

    unique_extras = OrderedDict.fromkeys(new_product.extras)
    if len(new_product.extras) > len(unique_extras):
        abort(400, description="Extras cannot be duplicated")
