import './Hello.css';
export default function Hello({name="boo",surname="blah",weight="20"}) {
 
    return(
        <>
        <img src="https://preview.redd.it/maomao-got-the-cat-ears-out-as-soon-as-she-heard-something-v0-b4r06nya1pde1.jpg?width=1080&crop=smart&auto=webp&s=21601ff48acd30a9f8255b47681ce9f75310b1fa" alt="" />
          <h1>Hello, {name}  {surname}  {weight} kg.
          </h1>
        </>
    );
}
