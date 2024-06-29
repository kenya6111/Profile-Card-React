// ここから書いてください
function Title() {
    return <h1 >Profile Card</h1>;
}

function Profile({person}) {
    return (
        <article class="profile">
            <h2>Card</h2>
            <article class="day-forecast">
                 <p>Name : {person.name}</p>
                 <p>Age : {person.age}</p>
                 <p>Sex : {person.sex}</p>
                 <p>Profession :{person.profession} </p>
            </article>
        </article>
    );
}

function Hello(props) {
    return (
        <div>
            <Title/>
            <Profile
                person={
                    {name:"jack",
                     age:23,
                     sex:"male",
                     profession:"software engineer"
                    }
                }
            />
            <Profile
                person={
                    {name:"jack",
                     age:23,
                     sex:"male",
                     profession:"software engineer"
                    }
                }
            />
            <Profile
            person={
                    {name:"jack",
                     age:23,
                     sex:"male",
                     profession:"software engineer"
                    }
                }
            />
        </div>

    );
}

ReactDOM.render(<Hello /> , document.getElementById('root'));