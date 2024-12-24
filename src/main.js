import k from "./kaplayLoader.js"
import room1 from "./scenes/room1.js";
import {room2} from "./scenes/room2.js";
import intro from "./scenes/intro.js";

k.scene("room1", room1)
k.scene("room2", room2)
k.scene("intro", intro)

k.go("intro")