let playListSongs = ["Рок", "Поп", "Джаз", "Классика"];
let rockCount = 0;

for (let song = 0; song < playListSongs.length; song++) {
    if (playListSongs[song] === "Рок") {
        rockCount++;
    }
    console.log(`Песня ${song + 1} : ${playListSongs[song]}`);
}
playListSongs.push("Рок");
console.log(`Рок песен: ${rockCount}`);
console.log(`Всего песен: ${playListSongs.length}`);