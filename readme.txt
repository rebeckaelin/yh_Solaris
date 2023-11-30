Pseudokod för Solaris:

skapa basic struktur i HTML för samtliga delar, döp de logiskt.
stylea och placera ut allt med hjälp av CSS.

Javascript:
skapa funktion för API-key & för att hämta datan.
skapa en funktion som är dynamisk och kan återanvändas för solens och samtliga planeters data från API-anropet.
skapa en funktion du kan anropa i varje eventlistener som är satt på samtliga planeter och solen som är hämtade med DOM. Korrigera färgen på planeten som visas +ring till Saturnus.
funktion för stjärnorna i bakgrunden
funktion för "tillbaka"knappen

TILLÄGGSKOMMENTARER TILL KODEN

Jag har försökt att hålla funktionerna dynamiska och inte onödigt långa och tycker jag lyckats. Jag returnerar ut datan jag behöver från funktionen "getBodiesData" och använder den senare i min "printInfo"/"planetClick" funktion.

I "planetClick" ligger de nödvändiga delarna såsom "stars"-funktionen, vad jag vill ska gömmas och visas samt planeten som skall byta färg beroende på vilken planet du klickar på. Där anropas också funktionen som hämtar och printar ut datan på rätt ställe i HTML.

I funktionen "stars" har jag använt canvas och ritat stjärnor som slumpas random varje gång man trycker på en planet.

Jag tycker min kod är tydlig, lättläst och effektivt kodad utefter min förmåga att koda efter dessa veckor med Javascript.