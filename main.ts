console.log(input.acceleration(Dimension.Z))
while (true) {
    if (input.acceleration(Dimension.Z) > 0 || input.acceleration(Dimension.Z) < 0 && input.lightLevel() < 8) {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
