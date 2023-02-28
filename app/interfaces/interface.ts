export interface Candidate {
  _id: string;
  name: string;
  email: string;
  phone: Phone;
  nationality: string;
  country: string;
  city: string;
  linkedin: string;
  resume: string;
  photo: string;
  validated_by: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
}

interface Phone {
  areaCode: string;
  number: string;
}
