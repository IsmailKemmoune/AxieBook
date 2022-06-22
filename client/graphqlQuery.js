const query = `query GetAxieDetail($axieId: ID!) {
	axie(axieId: $axieId) {
	  ...AxieDetail
	  __typename
	}
  }
  fragment AxieDetail on Axie {
	id
	image
	class
	figure {
	  atlas
	  model
	  image
	  __typename
	}
	parts {
	  ...AxiePart
	  __typename
	}
	stats {
	  ...AxieStats
	  __typename
	}
	__typename
  }
  
  fragment AxiePart on AxiePart {
	name
	class
	type
	abilities {
	  ...AxieCardAbility
	  __typename
	}
	__typename
  }
  fragment AxieCardAbility on AxieCardAbility {
	name
	description
	backgroundUrl
	effectIconUrl
	__typename
  }
  fragment AxieStats on AxieStats {
	hp
	speed
	skill
	morale
	__typename
  }`

  export default query;