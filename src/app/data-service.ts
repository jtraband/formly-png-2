import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
    static t1Options = [
        { name: 'Clip On', code: 'CO' },
        { name: 'Detachable', code: 'D' },
        { name: 'Resizable', code: 'RS' },
        { name: 'Waterproof', code: 'WP' },
    ];
    

    static getT1Options(): Observable<any[]> {
        return of(this.t1Options);
    }
}


