namespace SpriteKind {
    export const Chest = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(true, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
info.onCountdownEnd(function () {
    game.over(false, effects.slash)
})
music.beamUp.playUntilDone()
let Player = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
Player.setPosition(10, 101)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888886888888688888888888888888888888888888888886688888886888888888888888888888888888888888868888886888888888888888888888888888888888868888886888888
    8888888888888888888888886966888888888888888888888888888888888888888869688888888888888888888888888888888888888869688888888888888888888888888888888888888869688888
    8888888888888888888888888688888888888888888888888888888888888888888886888888888888888888888888888888888888888886888888888888888888888888888888888888888886888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8838888888888888888888888888888888888888888838888888888888888888888888888888888888888838888888888888888888888888888888888888888833388888888888888888888888888888
    3333388888888888888888888888888888888888883333388888888888888888888888888888888888883333388888888888888888888888888888888888883333333888888888888888888888888888
    8333888888888888888888888888888888888888888333888888888888888888888888888888888888888333888888888888888888888888888888888888888333338888888888888888888888888888
    8383888888888888888888888888888888888888888383888888888888888888888888888888888888888383888888888888888888888888888888888888888388838888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888688888888888888888888888888888888888888888868888888888888888888888888888888888888888868888888888888888888888888888888888888888868888
    888888888888ddd888888888888868888888888888888888888888ddd88888888888888688888888888888888888888888ddd888888888888688888888888888888888888888ddd88888888888868888
    8888888888888d88888888888866666888888888888888888888888d8888888888888866688888888888888888888888888d88888888888866688888888888888888888888888d888888888888666888
    8888888888888888888888888866688888888888888888888888888888888888888888668888888888888888888888888888888888888888668888888888888888888888888888888888888888668888
    8888888888888888688888888888688888888888888888888888888888688888888888868888888888888888888888888888886888888888868888888888888888888888888888886888888888868888
    6688888888888886668888888866666888888888886688888888888886668888888888666888888888886688888888888888866688888888666888888888886688888888888888866688888888666888
    6888888888888888688888866666688888888888886888888888888888688888888666668888888888886888888888888888886888888666668888888888886888888888888888886888888666668888
    6688888888888888666888886666666688888888866688888888888888666688888866666688888888866688888888888888886668888866666688888888866688888888888888886668888866666688
    6668888888888886668888888666666688888888886668888888888886668888888886666688888888886668888888888888866688888886666688888888886666688888888888866688888886666688
    6688888888888866668888866666666888888888866688888888888866668888888666666888888888866688888888888888666688888666666888888888866688888888888888666688888666666888
    6888888888888866668888666666666666666666666888888888888866668888886666666666666666666888888888888888666688886666666666666666666888888888888888666688886666666666
    6666688888888886666666666666666666666666666666688888888886666666666666666666666666666666688888888888866666666666666666666666666666666888888888866666666666666666
    6666666688888866666666666666666666666666666666666688888866666666666666666666666666666666666688888888666666666666666666666666666666666666888888666666666666666666
    6666667799999999999999776666666666666666666666667799999999999999997766666666666666666666667799999999999999997766666666666666666666666677999999999999997766666666
    6667799999999999999999999977766666666666666667799999999999999999999999776666666666666667799999999999999999999999776666666666666666677999999999999999999999776666
    9999999999999999999999996111111999776666679999999999999999999999999961111999776666679999999999999999999999999961111999776666679999999999999999999999999961111999
    9999996999999999999999996999911119977779999999996999999999999999999969991119977779999999996999999999999999999969991119977779999999999969999999999999999969991119
    9999996999999999999999996699999111199999999999996999999999999999999966999111199999999999996999999999999999999966999111199999999999999969999999999999999966999111
    9999996699999999999999966999999991111999999999996699999999999999999669999991111999999999996699999999999999999669999991111999999999999966999999999999999669999991
    9999966699999999999999996999999999911119999999966699999999999999999969999999911119999999966699999999999999999969999999911119999999999666999999999999999969999999
    9999966699999999999999996699999999999999999999966699999999999999999966999999999999999999966699999999999999999966999999999999999999999666999999999999999966999999
    9999996669999999999911166611999999999999999999996669999999999999111666199999999999999999996669999999999999111666199999999999999999999966699999999999111666199999
    9999966999999999911119966666999999999999999999966999999999911111199666699999999999999999966999999999999111199666699999999999999999999669999999999111199666699999
    9999666669999111199999666666999999999999999999666669999111199999996666699999999999999999666669999991111999996666699999999999999999996666699991111999996666699999
    9996666661111199999999666666699999111111999996666661111199999999996666669999111111999996666661111111999999996666669999111111999999966666611111999999996666669999
    1996666699999999999999996666699111111111111996666699999999999999999966669111111111111996666699999999999999999966669111111111111999966666999999999999999966669111
    1166666666999999999996666699111111111111111166666666999999999999966666911111111111111166666666999999999999966666911111111111111166666666669999999999966666911111
    1111666669999999999999666911111111111111111111666669999999999999996669111111111111111111666669999999999999996669111111111111111111116666699999999999996669111111
    1116666666999999999999691111111111111111111116666666999999999999996911111111111111111116666666999999999999996911111111111111111111166666669999999999996911111111
    1666666666661119999111111111111111111111111666666666661119999911111111111111111111111666666666666611199991111111111111111111111666666666666611199991111111111111
    1116666666199999111111111111111111111111111116666666199999111111111111111111111111111116666666111999991111111111111111111111111111166666661999991111111111111111
    1166666666699111111111111111111111111111111166666666699111111111111111111111111111111166666666666991111111111111111111111111111166666666666991111111111111111111
    1666666666661111111111111111111111111111111666666666661111111111111111111111111111111666666666666611111111111111111111111111111666666666666611111111111111111111
    1116666666666111111111111111111111111111111116666666666111111111111111111111111111111116666666666661111111111111111111111111111111166666666661111111111111111111
    1166666666611111111111111111999999111111111166666666611111111111111111199999111111111166666666666111111111111111199999111111111166666666666111111111111111199999
    1111666666661111111111111999111111999111111111666666661111111111111119911111999111111111666666666611111111111119911111999111111111116666666611111111111119911111
    1666666666661111111111999111111111119999111666666666661111111111119991111111119999111666666666666611111111119991111111119999111666666666666611111111119991111111
    1166666666666111111199111111111111111199991166666666666111111111991111111111111199991166666666666661111111991111111111111199991166666666666661111111991111111111
    9996666661111111199911111111111111111111999996666661111111199999111111111111111111999996666661111111111999111111111111111111999999966666611111111999111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(Player, 100, 100)
scene.cameraFollowSprite(Player)
info.startCountdown(23)
tiles.setCurrentTilemap(tilemap`level1`)
