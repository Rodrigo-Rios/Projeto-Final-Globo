import gladiator as gl 
from flask import abort

def validate_name(field_validations, name_base):
    if not( gl.validate(field_validations[0], name_base)):
        abort(400, description="Name field only accepts string")

def validate_address(field_validations, name_base):
    if not( gl.validate(field_validations[1], name_base)):
        abort(400, description="Adress field only accepts string")

def validate_description(field_validations, name_base):
    if not( gl.validate(field_validations[2], name_base)):
        abort(400, description="Description field only accepts string")

def validate_image(field_validations, name_base):
    if not( gl.validate(field_validations[3], name_base)):
        abort(400, description="Image field only accepts string")

def validate_responsible(field_validations, name_base):
    if not( gl.validate(field_validations[4], name_base)):
        abort(400, description="Responsible field only accepts string")


