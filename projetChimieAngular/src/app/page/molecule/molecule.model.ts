export class Molecule {
    id !: number;
	nb_C !: number;
	nb_H !: number;
	nb_O !: number;
	nb_N !: number;
	
	alcene !: boolean;
	numC_alcene !: number;
	alcyne !: boolean;
	numC_alcyne !: number;
	alcool !: boolean;
	numC_alcool !: number;
	aldehide !: boolean;
	numC_aldehide !: number;
	cetone !: boolean;
	numC_cetone !: number;
	acide !: boolean;
	numC_acide !: number;
	amine !: boolean;
	numC_amine !: number;
	
	masseMolaire !: number;
}