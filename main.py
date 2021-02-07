print(input.acceleration(Dimension.Z))
while True:
    if input.acceleration(Dimension.Z) > 0 and input.light_level() < 10:
        light.set_all(light.rgb(255, 255, 255))
    elif input.light_level() > 10:
        light.clear()
        