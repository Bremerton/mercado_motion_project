console.log(input.rotation(Rotation.Roll))
while (true) {
    if (input.rotation(Rotation.Roll) < 0) {
        light.setAll(light.rgb(255, 255, 255))
    } else if (input.lightLevel() < 10) {
        light.clear()
        input.acceleration(Dimension.Z)
        input.rotation(Rotation.Pitch)
    }
    
}
