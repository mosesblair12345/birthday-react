
const List = ({people, setPeople}) => {
  const handleClick=(id)=>{
    const newPeople=people.filter((person)=>{
           return person.id !== id;
    })
    setPeople(newPeople)
  }
  return (
    <>
    {
      people.map((person)=>{
        const {id,name,image,age}=person;
        return(
        <article key={id} className="person">
           <img src={image} alt={name}/>
             <div className="details">
             <h4>{name}</h4>
             <p>{age} years</p>
           </div>
           <div className="btn-list">
           <button onClick={()=>handleClick(id)} >clear</button>
           </div>
        </article>
        )
      })
    }
    </>
  );
};

export default List;
