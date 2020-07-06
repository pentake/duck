sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy()
    info.changeScoreBy(1)
    music.playMelody("F A C5 - - - - - ", 800)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    egg = sprites.createProjectileFromSprite(img`
        . . . . . . . .
        . . . 1 1 . . .
        . . 1 1 1 1 . .
        . 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 .
        . 1 1 1 1 1 1 .
        . d 1 1 1 1 d .
        . d d d d d d .
        . . d d d d . .
        . . . . . . . .
    `, Duck, 0, -200)
    music.pewPew.play()
    egg.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
    music.playMelody("C5 G C - - - - - ", 800)
})
let Bat: Sprite = null
let egg: Sprite = null
let Duck: Sprite = null
Duck = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    . b b b d 5 5 5 5 5 4 4 4 4 4 b
    b d d d b b d 5 5 4 4 4 4 4 b .
    b b d 5 5 5 b 5 5 5 5 5 5 b . .
    c d c 5 5 5 5 d 5 5 5 5 5 5 b .
    c b d c d 5 5 b 5 5 5 5 5 5 b .
    . c d d c c b d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
Duck.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(Duck, 100, 0)
Duck.setPosition(75, 110)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Bat = sprites.create(img`
        . . f f f . . . . . . . . f f f
        . f f c c . . . . . . f c b b c
        f f c c . . . . . . f c b b c .
        f c f c . . . . . . f b c c c .
        f f f c c . c c . f c b b c c .
        f f c 3 c c 3 c c f b c b b c .
        f f b 3 b c 3 b c f b c c b c .
        . c b b b b b b c b b c c c . .
        . c 1 b b b 1 b b c c c c . . .
        c b b b b b b b b b c c . . . .
        c b c b b b c b b b b f . . . .
        f b 1 f f f 1 b b b b f c . . .
        f b b b b b b b b b b f c c . .
        . f b b b b b b b b c f . . . .
        . . f b b b b b b c f . . . . .
        . . . f f f f f f f . . . . . .
    `, SpriteKind.Enemy)
    Bat.setVelocity(0, 50)
    Bat.setPosition(Math.randomRange(8, 152), 0)
    Bat.setFlag(SpriteFlag.AutoDestroy, true)
})
forever(function () {
    effects.starField.startScreenEffect(5000)
})
