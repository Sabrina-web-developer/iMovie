// const API_KEY = process.env.REACT_APP_API_KEY
const apiConfig =  {
  baseUrl:'https://api.themoviedb.org/3/',
  apiKey: '7d069f6c91a3a7bdf8ec2412b8fa6104',
  originalImage: (imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) =>`https://image.tmdb.org/t/p/w500/${imgPath}`
    
 
}

export default apiConfig