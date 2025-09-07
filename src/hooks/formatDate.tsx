type TformatDate = {
    isoDate?:string
}


export const FormatDate = ({ isoDate }: TformatDate) => {
    if (!isoDate) return null;
  
    return new Date(isoDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };