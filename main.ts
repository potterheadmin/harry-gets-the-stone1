sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spell = sprites.createProjectileFromSprite(img`
. . . e e e . . . 
. . 5 4 5 5 . . . 
. e 4 5 f 5 5 e . 
e 4 4 4 f f 5 e e 
4 4 f 5 4 4 5 5 e 
e 4 f f 4 5 f e 5 
. e 5 5 e 4 4 5 . 
. . e e e e . . . 
. . . e . . . . . 
`, Harry, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 200)
    info.changeLifeBy(-1)
})
let Death_Eater: Sprite = null
let spell: Sprite = null
let Harry: Sprite = null
scene.setBackgroundColor(12)
Harry = sprites.create(img`
. . f f f f f f f f f . . . 
. f f f f f f f f f f f . . 
. f f f f 4 f f f f f f f . 
f f f f 4 2 f f f f f f f . 
f f f f 4 2 2 f f f f f f f 
f f f 4 4 4 2 4 4 4 f f f f 
f f f f f f 4 4 f f f f f f 
f f 4 4 7 f f f f 4 4 f f f 
f f 4 4 7 f 4 4 f 4 4 7 f f 
f f 4 4 7 f 4 4 f 4 4 7 f f 
f f f f f f 4 4 f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 f 
. . 4 4 4 2 2 2 2 4 4 4 . . 
. . . 4 4 2 2 2 2 4 4 . . . 
. . . . 4 4 4 4 4 4 . . . . 
`, SpriteKind.Player)
let stone = sprites.create(img`
. . d 5 d . . . 
. d 2 5 5 d . . 
. d 2 4 4 5 d . 
d d 2 2 4 5 d . 
e 2 2 2 2 4 5 d 
e 2 2 2 2 2 2 d 
f 2 2 2 2 2 d d 
f e 2 2 2 2 d . 
. f e e e e d . 
. f f f f f f . 
`, SpriteKind.Food)
stone.setPosition(Math.randomRange(0, 150), Math.randomRange(0, 120))
controller.moveSprite(Harry)
Harry.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.setLife(3)
info.startCountdown(5)
game.onUpdateInterval(200, function () {
    Death_Eater = sprites.create(img`
. . f f 5 5 5 f f . . 
. f 5 f f f f f 5 f . 
5 f 5 5 5 5 5 5 5 f 5 
f f f f 5 5 5 f f f f 
5 5 f f f f f f f 5 5 
f 5 f 5 5 f 5 5 f 5 f 
f 5 5 f f f f f 5 5 f 
f f 5 f 5 5 5 f 5 f f 
f f 5 5 f 5 f 5 5 f f 
. 5 f 5 5 f 5 5 f 5 . 
. . f f 5 f 5 f f . . 
. . . f 5 5 5 f . . . 
`, SpriteKind.Enemy)
    Death_Eater.setVelocity(Math.randomRange(-50, 100), Math.randomRange(-50, 100))
    Death_Eater.setPosition(Math.randomRange(0, 150), Math.randomRange(0, 120))
})
