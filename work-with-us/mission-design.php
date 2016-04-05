<?PHP
  // form handler
  if($_POST && isset( $_POST['name'], $_POST['email'], $_POST['industry'], $_POST['problems'], $_POST['does-something'], $_POST['impact'])) {

    $industry = $_POST['industry'];
    $problems = $_POST['problems'];
    $doesSomething = $_POST['does-something'];
    $impact = $_POST['impact'];
    $name = $_POST['name'];
    $organization = $_POST['organisation'];
    $emailaddress = $_POST['email'];

    $mailBody=" Name: $name\n
                Organisation: $organization \n
                Email: $emailaddress\n\n

                I work in $industry, but things are broken. \n
                We're dealing with a lot of $problems \n
                I'd really like to design a mission that $doesSomething
                with the impact being $impact \n";

      $to = "hello@trillium.tech";
      $subject = "MISSION INITIATED";
      mail($to, $subject, $mailBody, "From: $name <$emailaddress>");
      header("Location: http://trilliumtechnologies.net/thanks");
      exit;
  }
?>
