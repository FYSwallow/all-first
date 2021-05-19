class Album {
    label: Album.AlbumLabel | undefined;
}
namespace Album {
    export class AlbumLabel { }
}

console.log(Album)