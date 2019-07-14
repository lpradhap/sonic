import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public pathologists: IPathologists[] = [{
    id: 1,
    firstName: 'Bonar',
    lastName: 'Dr Ross',
    contact: {
      phone: '(02) 123 456789',
      email: 'ross@gmail.com'
    },
    image: 'https://static1.squarespace.com/static/5a5b124e8a02c70357f44737/t/5bd41d01eef1a139a2fcc590/1550867253741/Lita+profile+pic.jpeg',
    qualifications: ['MB', 'BCh', 'BAO'],
    specialty: 'Histopathology / Cytopathology',
    interest: 'Bone and soft tissue pathology, head and neck pathology, and breast',
    biography: 'am commune noluisse in. Nec id partem feugiat, id nulla quidam pri, pri in invenire abhorreant. Vix ut purto dolor vocibus'
  },
  {
    id: 2,
    firstName: 'Blackwell',
    lastName: 'Dr Robin',
    contact: {
      phone: '(02) 123 456789',
      email: 'blackwell@gmail.com'
    },
    image: 'https://recdonline.com.au/assets/admin/assets/pages/media/profile/profile_user.jpg',
    qualifications: ['MB', 'BCh'],
    specialty: 'Histopathology / Cytopathology',
    interest: 'm. Vi Professor Fiona Bonar graduated with honours from the National University of Ireland in 1977. Having first trained in the clinical arena, she is also a member of the Royal College of Physicians of Ireland and holds diplomas in both paediatrics and obstetrics.Adj.Prof.Bonar began her pathology training in Ireland at Trinity College, Dublin, and subsequently studie',

    biography: 'ui. Nec ei suavitate voluptatum, mel no nominavi copiosae apeirian, ei aliquip indoctum cum. Vi Professor Fiona Bonar graduated with honours from the National University of Ireland in 1977. Having first trained in the clinical arena, she is also a member of the Royal College of Physicians of Ireland and holds diplomas in both paediatrics and obstetrics.Adj.Prof.Bonar began her pathology training in Ireland at Trinity College, Dublin, and subsequently studied in the USA, where she was Resident and Chief Resident in'
  },
  {
    id: 3,
    firstName: 'Ian',
    lastName: 'Dr Smith',
    contact: {
      phone: '(02) 123 456789',
      email: 'smith@gmail.com'
    },
    image: 'https://static1.squarespace.com/static/53b599ebe4b08a2784696956/59279acaf5e2317dc91183ab/59279acaf7e0abcff58d8fe9/1521755726037/professional-photographer-01.JPG',
    qualifications: ['BCh', 'BAO'],
    specialty: 'Cytopathology',
    interest: 'curei recusabo pri no. Amet placerat ne q',

    biography: 'Adjunct Prem ipsum dolor sit amet, justo epicurei recusabo pri no. Amet placerat ne qui. Nec ei suavitate voluptatum, mel no nominavi copiosae apeirian, ei aliquip indoctum cum. Vix in sint veri mediocritatt in'
  },
  {
    id: 4,
    firstName: 'Russell',
    lastName: 'Dr Peters',
    contact: {
      phone: '(02) 123 456789',
      email: 'peters@gmail.com'
    },
    image: 'https://content.linkedin.com/content/dam/blog/en-us/corporate/blog/2014/07/Yumi_Wilson_L7155_SQ.jpg.jpeg',
    qualifications: ['MB', 'BCh', 'BAO'],
    specialty: 'Histopathology',
    interest: 'tate voluptatum, mel no nominavi copiosae a',
    biography: 'ui. Nec ei suavitate voluptatum, mel no nominavi copiosae apeirian, ei aliquip indoctum cum. Vi Adjunct Professor Fiona Bonar graduated with honours from the National University of Ireland in 1977. Having first trained in the clinical arena, she is also a member of the Royal College of Physicians of Ireland and holds diplomas in both paediatrics and obstetricem ipsum dolor sit amet, justo epicurei recusabo pri no. Amet placerat ne qui. Nec ei suavitate voluptatum, mel no nominavi copiosae apeirian, ei aliquip indoctum cum. Vix in sint veri mediocritatn'
  }];


  public activePathologistID: number;

  constructor(private http: HttpClient) { }

  getCurrentPathologistIndex(): number {
    return this.pathologists.findIndex(el => {
      return el.id === this.activePathologistID;
    })
  }

  getNextPathologist(): IPathologists {
    const currentIndex = this.getCurrentPathologistIndex();
    return (this.pathologists.length > currentIndex + 1) ? this.pathologists[currentIndex + 1] : null;

  };

  getPrevPathologist(): IPathologists {
    const currentIndex = this.getCurrentPathologistIndex();

    return currentIndex - 1 > -1 ? this.pathologists[currentIndex - 1] : null;

  };
}

export interface IPathologists {
  id: number;
  firstName: string;
  lastName: string;
  contact: {
    phone: string;
    email: string;
  };
  image: string;
  qualifications: string[];
  specialty: string;
  interest: string;
  biography: string;
}
