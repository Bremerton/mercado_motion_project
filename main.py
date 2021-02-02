print(input.acceleration(Dimension.Z))
while True:
    if input.acceleration(Dimension.Z) > 0 or input.acceleration(Dimension.Z)  < 0 and input.light_level() < 8:
        light.set_all(light.rgb(255, 255, 255))