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
        'Bearer BQCNU9ZfFoAF2gBMUCcPTWSB5WIJFnCks1nr4lDOL1ADNd5KuiLJohQDFxqoJds_R8Cc6MZlirJOhMY9zt6imR7e5NL87sVyRBziDYUoYOFYnMpAwcLydXvtj-UE5-COecag4ENh0GPWHH52baiGf1KOB79Abh4ZPDEG5p-eMH3cb9ytQhO4mLF3I5ef3pJYq34'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCNU9ZfFoAF2gBMUCcPTWSB5WIJFnCks1nr4lDOL1ADNd5KuiLJohQDFxqoJds_R8Cc6MZlirJOhMY9zt6imR7e5NL87sVyRBziDYUoYOFYnMpAwcLydXvtj-UE5-COecag4ENh0GPWHH52baiGf1KOB79Abh4ZPDEG5p-eMH3cb9ytQhO4mLF3I5ef3pJYq34'
    });
    
    return this.http.get(url, { headers });
  }
}