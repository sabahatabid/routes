import Navbar from "@/app/component/navbar";
const CountryName = () => {
  return (
    <div style={{backgroundColor:"lightgray"}}>
      <h1>List Of Countries</h1>
      <Navbar href="/country/pakistan" name='Pakistan'/>
      <Navbar href="/country/china" name='China'/>
      <Navbar href="/country/iran" name='Iran'/>
      <Navbar href="/country/turkey" name='Turkey'/>
      <Navbar href="/country/india"name='India'/>
    </div>
  )
}

export default CountryName;