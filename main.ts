sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
    music.playMelody("C5 G C - - - - - ", 800)
})
info.onCountdownEnd(function () {
    game.over(true)
})
let 砂金: Sprite = null
scene.setBackgroundColor(1)
let カオナシ = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f f 1 1 1 1 f f . . . . 
. . . f f 1 1 1 1 1 1 f f . . . 
. . . f 1 1 c 1 1 c 1 1 f . . . 
. . . f 1 1 1 1 1 1 1 1 f . . . 
. . . f 1 f f 1 1 f f 1 f . . . 
. . f f 1 1 1 1 1 1 1 1 f f . . 
. . f f 1 1 c 1 1 c 1 1 f f . . 
. f f f 1 1 c 1 1 c 1 1 f f f . 
. f f f 1 1 1 1 1 1 1 1 f f f . 
. f f f f 1 1 f f 1 1 f f f f . 
. f f f f 1 1 1 1 1 1 f f f f . 
. f f f f f 1 1 1 1 f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
`, SpriteKind.Food)
let Duck = sprites.create(img`
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
controller.moveSprite(Duck, 100, 100)
Duck.setPosition(75, 110)
info.setLife(3)
info.startCountdown(15)
game.onUpdateInterval(100, function () {
    砂金 = sprites.create(img`
. . . . . . . . 
. . 5 5 5 5 . . 
. 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 . 
. 4 5 5 5 5 5 . 
. 4 4 5 5 5 5 . 
. . 4 4 4 5 . . 
. . . . . . . . 
`, SpriteKind.Enemy)
    砂金.setVelocity(Math.randomRange(-100, 100), Math.randomRange(-100, 100))
    砂金.setFlag(SpriteFlag.AutoDestroy, true)
})
