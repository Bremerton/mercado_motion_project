print(input.rotation(Rotation.ROLL))
while True:
    if input.rotation(Rotation.ROLL) < 0:
        light.set_all(light.rgb(255, 255, 255))
    elif input.light_level() < 10:
        light.clear()

        input.acceleration(Dimension.Z)
        input.rotation(Rotation.PITCH)