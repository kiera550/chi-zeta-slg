export default function MemberProfile({ item }) {
  return (
    <div class="card">
        <img class="card-img-top" src={`/images/${item.image}.jpg`} alt={item.name} />
        <div class="card-body">
        <h4>{item.name}</h4>
        <h5>"{item.gamma}"</h5>
        </div>
    </div>
  );
}