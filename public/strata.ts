import IPFS from 'ipfs-core'
import { ID } from 'ipfs-core/src/components/id';



export class Strata
{
    node?: IPFS.IPFS;
    info?: ID;
    file?: File;

    constructor()
    {
    }

    /**
     * Initializes the IPFS node
     */
    async initNode()
    {
        if (!this.node)
        {
            this.node = await IPFS.create({
                offline: false,
                start: true,
                silent: false

            });

            console.log(await this.node.version());
        }

    }

    /**
     * Adds a file to the list of files to upload
     * @param file File to add
     */
    addFile(file: File)
    {
        this.file = file
    }


    /**
     * Uploads the file to IPFS
     */

    // TODO: Careful not to run on a browser with an IPFS client on (Brave, or browser extension)
    // TODO: Fix lock already exists error
    // TODO: Check MFS for unix-like file management 
    async uploadFile()
    {
        // console.log(await this.node?.files.stat('/'))

        if(!this.file)
        {
            console.error("No file to upload")
            return
        }

        let entry = await this.node?.add({
            path: (this.file as File).name,
            content: this.file
        },
        {
            wrapWithDirectory: true
        }
        
        );
        
        // for await (const x of this.node?.cat(entry?.cid.toString() as string) as AsyncIterable<Uint8Array> )
        // {
        //     console.log(x)
        // }
        console.log(entry);

        return entry?.cid.toString()
    }
    
}
