import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
 

const ulist = [{
    "id": 1,
    "first_name": "Jarad",
    "last_name": "Redholls",
    "email": "jredholls0@biblegateway.com",
    "dob": "26/04/2023",
    "accno": 5300
  }, {
    "id": 2,
    "first_name": "Allx",
    "last_name": "O'Neal",
    "email": "aoneal1@nih.gov",
    "dob": "06/12/2023",
    "accno": 5134
  }, {
    "id": 3,
    "first_name": "Meggi",
    "last_name": "Gussie",
    "email": "mgussie2@plala.or.jp",
    "dob": "29/10/2023",
    "accno": 1393
  }, {
    "id": 4,
    "first_name": "Nanni",
    "last_name": "Wellbelove",
    "email": "nwellbelove3@ted.com",
    "dob": "21/06/2023",
    "accno": 1285
  }, {
    "id": 5,
    "first_name": "Ole",
    "last_name": "Drioli",
    "email": "odrioli4@networksolutions.com",
    "dob": "26/12/2023",
    "accno": 9332
  }, {
    "id": 6,
    "first_name": "Constantine",
    "last_name": "Cabbell",
    "email": "ccabbell5@harvard.edu",
    "dob": "24/06/2023",
    "accno": 7364
  }, {
    "id": 7,
    "first_name": "Beaufort",
    "last_name": "Kline",
    "email": "bkline6@newyorker.com",
    "dob": "26/11/2023",
    "accno": 6838
  }, {
    "id": 8,
    "first_name": "Joe",
    "last_name": "Massy",
    "email": "jmassy7@umn.edu",
    "dob": "27/09/2023",
    "accno": 5540
  }, {
    "id": 9,
    "first_name": "Ileane",
    "last_name": "Katzmann",
    "email": "ikatzmann8@symantec.com",
    "dob": "09/06/2023",
    "accno": 7982
  }, {
    "id": 10,
    "first_name": "Janina",
    "last_name": "Djurisic",
    "email": "jdjurisic9@redcross.org",
    "dob": "22/04/2023",
    "accno": 145
  }, {
    "id": 11,
    "first_name": "Elia",
    "last_name": "Manoch",
    "email": "emanocha@mediafire.com",
    "dob": "21/06/2023",
    "accno": 4730
  }, {
    "id": 12,
    "first_name": "Wait",
    "last_name": "Odgaard",
    "email": "wodgaardb@google.co.jp",
    "dob": "10/05/2023",
    "accno": 9980
  }, {
    "id": 13,
    "first_name": "Penny",
    "last_name": "Figura",
    "email": "pfigurac@samsung.com",
    "dob": "03/06/2023",
    "accno": 3032
  }, {
    "id": 14,
    "first_name": "Leroy",
    "last_name": "Wayper",
    "email": "lwayperd@miibeian.gov.cn",
    "dob": "04/07/2023",
    "accno": 8542
  }, {
    "id": 15,
    "first_name": "Ashlee",
    "last_name": "Van Dijk",
    "email": "avandijke@tmall.com",
    "dob": "13/07/2023",
    "accno": 186
  }, {
    "id": 16,
    "first_name": "Gaby",
    "last_name": "Keilty",
    "email": "gkeiltyf@dion.ne.jp",
    "dob": "08/01/2024",
    "accno": 9430
  }, {
    "id": 17,
    "first_name": "Ilyse",
    "last_name": "Etherton",
    "email": "iethertong@shinystat.com",
    "dob": "18/05/2023",
    "accno": 3957
  }, {
    "id": 18,
    "first_name": "Agnola",
    "last_name": "McClenaghan",
    "email": "amcclenaghanh@photobucket.com",
    "dob": "21/02/2023",
    "accno": 1623
  }, {
    "id": 19,
    "first_name": "Ashien",
    "last_name": "Featherbie",
    "email": "afeatherbiei@quantcast.com",
    "dob": "18/09/2023",
    "accno": 5221
  }, {
    "id": 20,
    "first_name": "Giorgia",
    "last_name": "Slyme",
    "email": "gslymej@europa.eu",
    "dob": "30/10/2023",
    "accno": 941
  }]

export default function TableDemo() {
  return (
    <div className="ml-10 mr-10 mt-[10vh]">
        <div>

        </div>
        <Table>
        <TableCaption>A list of your Users.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>first_name</TableHead>
            <TableHead>last_name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>DOB</TableHead>
            <TableHead className="text-right">Account Number</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {ulist.map((ulist) => (
            <TableRow key={ulist.id}>
                <TableCell className="font-medium">{ulist.id}</TableCell>
                <TableCell>{ulist.first_name}</TableCell>
                <TableCell>{ulist.last_name}</TableCell>
                <TableCell>{ulist.email}</TableCell>
                <TableCell>{ulist.dob}</TableCell>
                <TableCell className="text-right">{ulist.accno}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </div>
  )
}

