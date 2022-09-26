import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBwbeVIetvhR25YeaIiyUGZTMwq8GEpsaljPsNjIvaaMrIQcsz4z4nlpnZ48xOVrfBB7q4x_Ngt02qyLZ6gytFUoG6a13byz1RcdiZgPkgsgu8nz70Y2ooFW6GpwOhRxM14Q1HDJfjRLDXVbNSc8UAjyx6-SYXcIEMTc2-VGIidtmRSgzDHKOpDGZd6euA2QMI'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 
  }
}