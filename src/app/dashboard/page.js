export default function Dashboard() {
  return (
    <main>
      <div>this is dashboard</div>
    </main>
  );
}

export function generateMetadata({params}) {
    return{
       title:"Dashborad page",
       description:"he he description page of dashboard jumbled" 
    }
}
