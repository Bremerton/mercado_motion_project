console.log(input.acceleration(Dimension.Z))
while (true) {
    if (input.acceleration(Dimension.Z) > 0 && input.lightLevel() < 10) {
        light.setAll(light.rgb(255, 255, 255))
    } else if (input.lightLevel() > 10) {
        light.clear()
    }
    
}
