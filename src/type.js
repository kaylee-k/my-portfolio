'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
}) // Engineer|
.move(-8)
.type('Front-end ') // Full Stack |Developer
.pause(1000)
.move(null, {to: 'END'}) // Full Stack Developer|
.delete() // |
.type('Back-end Engineer')
.pause(1000)
.move(-9) // Back-end| Engineer
.delete(9) // |Engineer
.type('Full Stack')
.pause(1000)
.move(9)
.delete()
.go();