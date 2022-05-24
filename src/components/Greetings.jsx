export default function Greetings(props) {
  function checklanguage(language, name) {
    switch (language) {
      case 'de':
        return 'Hallo ' + name + '!';
      case 'en':
        return 'Hello ' + name + '!';
      case 'es':
        return 'Hola ' + name + '!';
      case 'fr':
        return 'Bonjour ' + name + '!';
      default:
        break;
    }
  }
  return (
    <div className="container">
      <p>{checklanguage(props.language, props.name)}</p>
    </div>
  );
}
