function showRuns(name)
{
    if(name == "CHAM")
    {
        clearLines()

        CHAMruns()
    }

    if(name == "LNXA")
    {
        clearLines()
    }
}

function addCHAMruns(dest)
{
    addLine([CHAM(), dest])
}

function CHAMruns()
{
    //East
    addCHAMruns(HART())
    addCHAMruns(METU())
    addCHAMruns(WOOD())
    addCHAMruns(SYRA())
    addCHAMruns(HRBG())
    addCHAMruns(LEHI())
    addCHAMruns(HAGE())
    addCHAMruns(GRNB())
    addCHAMruns(CHAR())
    addCHAMruns(ATLA())
    addCHAMruns(MARI())
    addCHAMruns(OCAL())
    addCHAMruns(NASH())
    addCHAMruns(NOKY())
    addCHAMruns(COLO())
    addCHAMruns(TOLE())
    addCHAMruns(CHIC())
    
    //West
    addCHAMruns(MEMP())
    addCHAMruns(OLIV())
    addCHAMruns(STPL())
    addCHAMruns(LNXA())
    addCHAMruns(KCMO())
    addCHAMruns(DALL())
    addCHAMruns(FTWO())
    addCHAMruns(HOUS())
    addCHAMruns(DENV())
    addCHAMruns(SALT())
    addCHAMruns(PHOE())
    addCHAMruns(RLTO())
    addCHAMruns(SACR())
    addCHAMruns(PORT())
}