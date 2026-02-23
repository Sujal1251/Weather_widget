import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
     const INIT_URL = "https://media.istockphoto.com/id/2187118610/photo/peaceful-and-serene-sky-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=KpkFAJGInf2H5A13bAQbqkrRN3RCgFDwiA_mxd7GFYE="
     const HOT_URL="https://tse2.mm.bing.net/th/id/OIP.bfzIzhNBSMqBMztwtgXaBwHaE8?pid=Api&h=220&P=0";
     const COLD_URL="https://images.unsplash.com/photo-1519863436079-8436f74be632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
     const RAIN_URL="https://images.unsplash.com/photo-1601915362083-4de15f97213f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return(
        <div className="InfoBox">
        <div className="cardContainer"> 
        <Card sx={{ maxWidth: 345 }}>  
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL: info.temp > 15 ? HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80 ?<ThunderstormIcon/>: info.temp > 15 ? <SunnyIcon/> :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature = {info.temp}&deg;C</div>
         <br />
         <div>Humidity = {info.humidity}</div>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather can be described <i>{info.weather}</i> and feels like = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
     </div> 
    </div>
    );
}