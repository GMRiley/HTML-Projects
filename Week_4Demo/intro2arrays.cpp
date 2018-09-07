/*
WEEK 5: ARRAYS

Arrays: a storage type that allows us to store data into RAM (memory) and 
access it whenever we would like during the program run.

Record 0 = FIRST RECORD
Record 1 = SECOND RECORD

'i' acts a placeholder for multiple sets of data stored into an array based on
their place in the listed array.


FOR LOOPS: Each for loop is "processing" the stored data from the arrays



DEMO PROGRAM PROMPT: 
Process the file "week5.txt" and store all of the data into arrays.  Re-print
the file to the console, but add a conversion to show each person's height in
feet and inches, and their weight in pounds (from file) and kilograms.


The conversion for pounds to kilos:

kilos = pounds * 0.453592

SECOND ADDITIONAL PROMPT:
Add a sequential search to find the tallest and heaviest people in the group,
and print this to the console in addition to the re-printed entire list of 
their weights (including pounds and kilos) and their heights (in feet and 
inches). 
*/

#include<iostream>
#include<fstream>
#include<string>

using namespace std;

void main()
{
	//create file shortcut name, link to file location
	ifstream fin;
	fin.open("C:\\Users\\KTRUCHON\\Downloads\\week5.txt");


	//variable declaration
	//declare array type and size
	string name[10], tallest_n, heaviest_n;
	int age[10], weight[10], height[10];
	int max_records, feet, inches, kilos;
	int i;
	int tallest, heaviest;

	//initialize i with a value of 0 [first record!]
	i = 0;

	//initialize the array
	while(!fin.eof())
	{
		//initializing the array -- storing initial data into it
		//same as batch processing from file, but storing into array types now
		fin >> name[i] >> age[i] >> weight[i] >> height[i];
		i++;


		//the below DOES NOT WORK for ARRAYS! uncomment and see for yourself!
		//cout << name << age << weight << height << endl;
	}
	fin.close();
	
	//dump i's value (record count) into max_records so we can use the value and revalue i
	max_records = i;

	//process the array to print the file in order as it appears
	cout << "INITIAL FILE INFORMATION -------------------------" << endl;
	for(i = 0; i < max_records; i++)
	{	//first value --> starting record #
		//second value --> condition of loop
		//third value --> growth of loop

		cout << name[i] << "\t" << age[i] << "yo \t" << weight[i] << "lbs \t" << height[i] << "in." << endl;
	
	}

	//reprocess the array so that height is now shown in feet and inches
	cout << endl << endl << "HEIGHT [feet & inches] ----------------" << endl;
	for(i = 0; i < max_records; i++)
	{
		feet = height[i] / 12;
		inches = height[i] % 12;//find the integer remainder when dividing by 12

		cout << name[i] << " is " << feet << "ft. " << inches << "in. tall." << endl;
	}
	
	//reprocess the array to find weight in kilograms
	cout << endl << endl << "WEIGHT [in pounds & kilograms] -------" << endl;
	for(i = 0; i < max_records; i++)
	{

		kilos = weight[i] * 0.453592;

		cout << name[i] << " is " << weight[i] << "lbs/" << kilos << "kgs." << endl;
	}

	/*SECOND PROGRAM PROMPT ----- SEQUENTIAL SEARCH REFRESHER ------------------*/

	
	//create a baseline for search before processing array, by storing the initial value of your search variable as the FIRST RECORDS DATA 
	tallest_n = name[0];
	tallest = height[0];
	//the above stores the data from record 0 as the baseline
	for(i = 1; i < max_records; i++)
	{
		if(tallest < height[i])
		{
			tallest = height[i];
			tallest_n = name[i];
		}

	}

	cout << endl << "TALLEST PERSON: " << tallest_n << "\t" << tallest << "in." << endl;
		
	
	//create a baseline for search before processing array, by storing the initial value of your search variable as the FIRST RECORDS DATA 
	//find the heaviest person in the list
	heaviest = weight[0];
	heaviest_n = weight[0];
	//the above stores the data from record 0 as the baseline
	for(i = 1; i < max_records; i++)
	{
		if(heaviest < weight[i])
		{
			heaviest = weight[i];
			heaviest_n = name[i];
		}
	}
	cout << endl << "HEAVIEST PERSON: " << heaviest_n << " is " << heaviest << "lbs." << endl;

	system("pause");
	
}//main() CLOSE

/*
BELOW IS COMMENTED OUT! REMOVE THE BLOCK COMMENT [AND BLOCK COMMENT THE ABOVE PROGRAM] TO SEE IT RUN

Storing data straight into an array, without reading from a file
*/

/*

#include<iostream>
#include<string>

using namespace std;

void main()
{
	//DECLARE & INITIALIZE ARRAY
	//declaration works the same as above demo
	//array values should be stored inside of {}'s, with each new data record separated with a comma ','
	//**DONT FORGET TO SET VALUES ACCORDING TO VARIABLE TYPE [strngs use "value", chars use 'value' ]

	string name[10] = {"Smith", "Adams", "Roberts", " Evans", "Bell", "Davis", "Martins"};
	int height[10] = {72, 73, 70, 62, 71, 68, 75}, max_records = 7;
	int age[10] = {23, 28, 24, 29, 30, 21, 25};
	double weight[10] = {165, 185, 170, 145, 158, 165, 195};
	

	int i;

	i = 0;

	//process the arrays to print to the console
	for(i = 0; i < max_records; i++)
	{
		cout << name[i] << "\t" << age[i] << "\t" << weight[i] << "lbs \t" << height[i] << "in. " << endl;

	}


	system("pause");

	



}//main()CLOSE

*/





