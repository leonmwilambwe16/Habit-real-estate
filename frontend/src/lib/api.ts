export const fetchMe = async (): Promise<{ userId: string; 
  message: string }> =>{
      const res = await fetch('http://localhost:8050/api/me',{
     method:'GET',
     credentials:"include",
  });
  if(!res.ok){
     throw new Error('Failed to fetch user info');
  }
   return res.json();
}

