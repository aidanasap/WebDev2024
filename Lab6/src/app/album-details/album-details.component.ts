import {Component, Input, OnInit} from '@angular/core';
import {Album, Photo} from "../models";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{

  album : Album;
  loaded : boolean;
  editableAlbum : Album;
  edit : boolean;

  constructor(private albumService : AlbumsService, private route : ActivatedRoute) {
    this.album = {} as Album;
    this.loaded = true;
    this.edit = false;
    this.editableAlbum = {} as Album;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));

      this.loaded = false;

      this.albumService.getAlbum(id).subscribe((album) =>{
        this.album = album;
        this.loaded = true;
      })
    })
  }

  saveChanges(){
    this.editableAlbum.userId = this.album.userId;

    this.albumService.updateAlbum(this.album.id, this.editableAlbum).subscribe((alb) =>{
      this.album = alb;
    })

    this.edit = !this.edit;

    this.editableAlbum = {} as Album;
  }
}
